# Fleet Vehicle Bulk Import Guide

## Excel File Format Requirements

The system supports importing multiple vehicles at once using Excel files (.xlsx or .xls format).

### Required Columns (Fleet Management Table Format)

| Column Name | Description | Example | Required |
|-------------|-------------|---------|----------|
| Vehicle ID | Unique identifier | V001 | Yes |
| Type | Vehicle type | motorcycle | Yes |
| Category | Vehicle category | commitment | Yes |
| Status | Current status | active | Yes |
| Location | Operating location | riyadh | Yes |

### Fleet Management Columns

| Column Name | Description | Valid Values | Default |
|-------------|-------------|--------------|---------|
| Leasing Company | Vehicle provider | Al Rajhi Leasing, Safi Leasing, Theeb Leasing | (empty) |
| Assigned Courier | Courier assignment | (leave empty for bulk import) | (empty) |
| KM Reading | Odometer reading | 5000 | 0 |
| Start Date | Service start date | 2024-01-15 | (empty) |
| End Date | Service end date | 2024-12-31 | (empty) |

### Optional Columns (Removed from Template)

The following columns have been removed from the import template to simplify the process:
- Model (Vehicle model/brand) 
- License Plate (Registration plate)
- Color (Vehicle color)
- Year (Manufacturing year)
- Insurance Number (Insurance policy number)
- Registration (Registration document)

These fields can be updated manually after import if needed.

### Vehicle Type Options

- **motorcycle**: Standard motorcycles for delivery
- **car**: Four-wheel vehicles
- **van**: Larger delivery vehicles
- **truck**: Heavy-duty vehicles
- **bicycle**: Eco-friendly option

### Sample Excel Format (Fleet Management Table Structure)

```
Vehicle ID | Type       | Category   | Leasing Company | Assigned Courier | Status | Location | KM Reading | Start Date | End Date
V001       | motorcycle | commitment | Al Rajhi Leasing|                 | active | riyadh   | 5000       | 2024-01-15 | 2024-12-31
V002       | car        | rent       | Safi Leasing    |                 | active | jeddah   | 12000      | 2024-02-01 | 2024-11-30
V003       | van        | commitment | Theeb Leasing   |                 | active | dammam   | 25000      | 2024-03-10 | 2025-03-09
```

### Linking with Couriers

After importing vehicles, you can:

1. **Automatic Linking**: When creating couriers via bulk import, include a "Vehicle ID" column that matches imported vehicles
2. **Manual Assignment**: Use the courier management interface to assign imported vehicles to couriers
3. **Search Integration**: The vehicle search in courier forms will include all imported vehicles

### Important Notes

1. **Unique Vehicle IDs**: Each Vehicle ID must be unique across the entire fleet
2. **Date Format**: Use YYYY-MM-DD format for maintenance dates
3. **Status Values**: Only use specified status values (available, assigned, maintenance, retired)
4. **City Matching**: Cities must match the system's supported locations
5. **Type Validation**: Vehicle types are strictly validated against allowed values

### Error Handling

The import process will:
- Skip rows with missing required fields (Vehicle ID, Type)
- Show detailed error messages for validation failures
- Provide import summary with success/failure counts
- Continue processing even if some rows fail

### Post-Import Operations

After successful import:
- Vehicles appear in Fleet Management immediately
- Available vehicles show in courier assignment dropdowns
- Vehicle search includes imported vehicles
- Bulk assignment operations become available

### Common Issues

- **Duplicate Vehicle IDs**: Each vehicle must have a unique identifier
- **Invalid Vehicle Types**: Must match exactly: motorcycle, car, van, truck, bicycle  
- **Invalid Cities**: Must be one of: riyadh, jeddah, dammam, mecca, medina
- **Invalid Status**: Must be one of: available, assigned, maintenance, retired
- **Date Formatting**: Maintenance dates must use YYYY-MM-DD format

### Workflow Integration

1. **Fleet Import**: Import vehicles using the "Import Vehicles" button
2. **Courier Import**: Import couriers with Vehicle ID references
3. **Automatic Linking**: System links couriers to vehicles based on Vehicle ID
4. **Manual Adjustments**: Use Fleet Management to modify assignments

### Best Practices

- Import vehicles before importing couriers for seamless linking
- Use consistent naming conventions for Vehicle IDs
- Regularly update vehicle status after imports
- Verify all vehicle data before bulk importing
- Keep backup copies of import files for reference