# Courier Bulk Import Guide

## Excel File Format Requirements

The system supports importing multiple couriers at once using Excel files (.xlsx or .xls format).

### Required Columns

| Column Name | Description | Example | Required |
|-------------|-------------|---------|----------|
| Courier ID | Unique identifier number | 123 | Yes |
| Name | Full name of courier | Ahmed Ali | Yes |
| Phone | Phone number with country code | +966501234567 | Yes |

### Optional Columns

| Column Name | Description | Valid Values | Default |
|-------------|-------------|--------------|---------|
| Vehicle Type | Type of vehicle | motorcycle, car, bicycle, scooter | motorcycle |
| City | Operating city | riyadh, jeddah, dammam, mecca, medina | riyadh |
| Category | Visa/employment category | kafalah, iqama, visit | kafalah |
| Preferred App | Food delivery app | hungerstation, jahez, toyou | hungerstation |
| Vehicle ID | Company vehicle ID number | V001 | (empty) |
| Own Vehicle | Does courier own vehicle | true, false | false |
| Start Date | Employment start date | 2024-01-15 | Today's date |
| End Date | Employment end date | 2024-12-31 | (empty) |
| Status | Current status | active, offline, on_break | active |
| Total Orders | Initial order count | 0 | 0 |
| Total Earnings | Initial earnings amount | 0 | 0 |
| Rating | Initial rating | 0 | 0 |
| Documents | Document notes | ID Card Uploaded | (empty) |

### Sample Excel Format

```
Courier ID | Name          | Phone          | Vehicle Type | City   | Category | Preferred App
123        | Ahmed Ali     | +966501234567  | motorcycle   | riyadh | kafalah  | hungerstation
124        | Sarah Mohamed | +966502345678  | car          | jeddah | iqama    | jahez
125        | Omar Hassan   | +966503456789  | bicycle      | dammam | visit    | toyou
```

### Important Notes

1. **Email addresses are auto-generated** - You don't need to provide email addresses. The system will create them automatically using the format: `{CourierID}@company.local`

2. **Date Format** - Use YYYY-MM-DD format for dates (e.g., 2024-01-15)

3. **Phone Format** - Include country code (e.g., +966501234567)

4. **Boolean Values** - Use "true" or "false" for Own Vehicle column

5. **Case Sensitivity** - Column headers are case-insensitive, but values should match the specified options

6. **Empty Values** - Leave cells empty for optional fields to use default values

### Error Handling

The import process will:
- Skip rows with missing required fields (Courier ID, Name, Phone)
- Show detailed error messages for validation failures
- Provide a summary of successful and failed imports
- Continue processing even if some rows fail

### Testing the Import

1. Download the template from the Import dialog
2. Fill in your courier data following the format above
3. Save as Excel format (.xlsx recommended)
4. Use the "Import Couriers" button in Courier Management
5. Review the import results and fix any errors if needed

### Vehicle Linking with Fleet Imports

The system supports automatic linking between bulk imported couriers and bulk imported vehicles:

1. **Import Fleet First**: Use "Import Vehicles" in Fleet Management to add vehicles with Vehicle IDs like V001, V002, etc.

2. **Reference in Courier Import**: When importing couriers, include the Vehicle ID column with matching values:
   ```
   Courier ID | Name      | Phone         | Vehicle ID | Own Vehicle
   123        | Ahmed Ali | +966501234567 | V001       | false
   124        | Sarah     | +966502345678 | V002       | false
   ```

3. **Automatic Assignment**: The system automatically:
   - Finds available vehicles by Vehicle ID
   - Assigns them to the couriers
   - Updates vehicle status to "assigned"
   - Links courier and vehicle in the database

### Workflow for Bulk Operations

1. **Step 1**: Import your fleet vehicles using Fleet Management → "Import Vehicles"
2. **Step 2**: Verify vehicles appear with "available" status
3. **Step 3**: Import couriers with Vehicle ID references
4. **Step 4**: Check that vehicles are now "assigned" to specific couriers

### Common Issues

- **Duplicate Courier IDs**: Each Courier ID must be unique
- **Invalid Phone Numbers**: Must include country code and be properly formatted
- **Invalid Dates**: Use YYYY-MM-DD format only
- **Invalid Vehicle Types**: Must be one of: motorcycle, car, bicycle, scooter
- **Invalid Cities**: Must be one of: riyadh, jeddah, dammam, mecca, medina
- **Vehicle Not Found**: Vehicle ID must exist and be available for assignment
- **Vehicle Already Assigned**: Each vehicle can only be assigned to one courier