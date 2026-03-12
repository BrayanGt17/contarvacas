// Google Apps Script para Google Sheets como base de datos
// Copia este código en Extensions > Apps Script de tu hoja de cálculo

function doGet(e) {
  try {
    // Verificar si es una solicitud de eliminación
    if (e.parameter && e.parameter.delete) {
      const index = parseInt(e.parameter.delete);
      return deleteCuento(index);
    }
    
    // Si no, devolver la lista de cuentos
    const data = getData();
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      data: data
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*');
  }
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Agregar nueva fila
    sheet.appendRow([
      data.titulo,
      data.descripcion || '',
      data.url,
      new Date().toISOString()
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Cuento agregado'
    }))
    .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

function deleteCuento(index) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const lastRow = sheet.getLastRow();
    
    if (index >= 0 && index < lastRow - 1) {
      sheet.deleteRow(index + 2); // +2 porque la fila 1 son los encabezados y index empieza en 0
      return ContentService.createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Cuento eliminado'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Índice no válido'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

function getData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  // Saltar la primera fila (encabezados)
  const rows = data.slice(1);
  
  return rows.map((row, index) => ({
    index: index,
    titulo: row[0],
    descripcion: row[1],
    url: row[2],
    fecha: row[3]
  }));
}
