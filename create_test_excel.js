import XLSX from 'xlsx';
import fs from 'fs';

// Sample data for Jahez settlement
const data = [
  { 'Driver ID': '2131231', 'Driver Name': 'محمد أحمد', 'Delivery Price': 250.00, 'Cash Collection': 1500.00, 'Driver Credit': 100.00, 'Driver Debit': 50.00, 'Ignored': 0, 'Tips': 75.00 },
  { 'Driver ID': '2131231', 'Driver Name': 'محمد أحمد', 'Delivery Price': 150.00, 'Cash Collection': 800.00, 'Driver Credit': 50.00, 'Driver Debit': 25.00, 'Ignored': 0, 'Tips': 40.00 },
  { 'Driver ID': '2131231', 'Driver Name': 'محمد أحمد', 'Delivery Price': 200.00, 'Cash Collection': 1200.00, 'Driver Credit': 75.00, 'Driver Debit': 35.00, 'Ignored': 0, 'Tips': 60.00 },
  { 'Driver ID': '2131232', 'Driver Name': 'أحمد علي', 'Delivery Price': 300.00, 'Cash Collection': 2000.00, 'Driver Credit': 150.00, 'Driver Debit': 75.00, 'Ignored': 0, 'Tips': 100.00 },
  { 'Driver ID': '2131232', 'Driver Name': 'أحمد علي', 'Delivery Price': 180.00, 'Cash Collection': 900.00, 'Driver Credit': 60.00, 'Driver Debit': 30.00, 'Ignored': 0, 'Tips': 45.00 },
  { 'Driver ID': '2131233', 'Driver Name': 'سعيد خالد', 'Delivery Price': 220.00, 'Cash Collection': 1300.00, 'Driver Credit': 90.00, 'Driver Debit': 45.00, 'Ignored': 0, 'Tips': 65.00 },
  { 'Driver ID': '2131234', 'Driver Name': 'عبدالله محمد', 'Delivery Price': 280.00, 'Cash Collection': 1800.00, 'Driver Credit': 120.00, 'Driver Debit': 60.00, 'Ignored': 0, 'Tips': 85.00 }
];

// Create a new workbook
const wb = XLSX.utils.book_new();

// Convert data to worksheet
const ws = XLSX.utils.json_to_sheet(data);

// Add worksheet to workbook
XLSX.utils.book_append_sheet(wb, ws, 'Settlements');

// Write the Excel file
XLSX.writeFile(wb, 'test_jahez_settlement.xlsx');

console.log('Excel file created successfully: test_jahez_settlement.xlsx');