// Google Apps Script para Google Sheets como base de datos
// Copia este código en Extensions > Apps Script de tu hoja de cálculo

function doGet() {
  try {
    const data = getData();
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      data: data
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
    
    if (index >= 1 && index <= lastRow - 1) {
      sheet.deleteRow(index + 1); // +1 porque la fila 1 son los encabezados
      return { success: true, message: 'Cuento eliminado' };
    } else {
      return { success: false, message: 'Índice no válido' };
    }
  } catch (error) {
    return { success: false, message: error.toString() };
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
