// Script to fix vehicle-courier assignments after bulk import
import { db } from './server/db.js';
import { vehicles, couriers } from './shared/schema.js';
import { eq, and, isNotNull } from 'drizzle-orm';

async function fixVehicleAssignments() {
  console.log('Starting vehicle assignment fix...');
  
  try {
    // Get all couriers that have vehicle assignments
    const couriersWithVehicles = await db
      .select()
      .from(couriers)
      .where(and(
        isNotNull(couriers.vehicleId),
        eq(couriers.ownVehicle, false)
      ));
    
    console.log(`Found ${couriersWithVehicles.length} couriers with vehicle assignments`);
    
    let updatedCount = 0;
    
    for (const courier of couriersWithVehicles) {
      // Check if the vehicle exists and needs updating
      const vehicle = await db
        .select()
        .from(vehicles)
        .where(eq(vehicles.id, courier.vehicleId))
        .limit(1);
      
      if (vehicle.length > 0) {
        const vehicleData = vehicle[0];
        
        // Update vehicle if not properly assigned
        if (vehicleData.status !== 'assigned' || vehicleData.driverId !== courier.id) {
          await db
            .update(vehicles)
            .set({
              status: 'assigned',
              driverId: courier.id
            })
            .where(eq(vehicles.id, courier.vehicleId));
          
          console.log(`✓ Updated vehicle ${vehicleData.vehicleId} -> assigned to courier ${courier.name}`);
          updatedCount++;
        } else {
          console.log(`- Vehicle ${vehicleData.vehicleId} already correctly assigned`);
        }
      }
    }
    
    console.log(`\nCompleted: ${updatedCount} vehicles updated`);
    
  } catch (error) {
    console.error('Error fixing vehicle assignments:', error);
  }
}

fixVehicleAssignments();