module.exports = async (params) => {
  const { quickAddApi } = params;

  // Obtener el título de la nota desde el usuario
  const title = await quickAddApi.inputPrompt(
    "Record the Insight to be Forged:",
  );

  // Generar el ID de la nota
  let noteID;
  if (title) {
    // Reemplazar espacios con guiones y convertir a minúsculas
    const formattedTitle = title.replace(/ /g, "-").toLowerCase();
    noteID = `${Math.floor(Date.now() / 1000)}-${formattedTitle}`;
  } else {
    // Generar un sufijo aleatorio de 4 letras mayúsculas
    let suffix = "";
    for (let i = 0; i < 4; i++) {
      suffix += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    noteID = `${Math.floor(Date.now() / 1000)}-${suffix}`;
  }

  // Especificar la carpeta de destino
  const folderPath = "02-Library"; // Cambia esto por la ruta de tu carpeta
  const filePath = `${folderPath}/${noteID}.md`;

  // Ruta del template
  const templatePath = "06-Scrolls/knowledge.md"; // Cambia esto por la ruta de tu template

  try {
    // Leer el contenido del template
    const templateContent = await app.vault.adapter.read(templatePath);

    // Obtener la fecha y hora actual
    const now = new Date();
    const year = now.getFullYear(); // Año (4 dígitos)
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Mes (2 dígitos)
    const day = String(now.getDate()).padStart(2, "0"); // Día (2 dígitos)
    const date = `${year}-${month}-${day}`; // Formato año-mes-día
    const time = now.toLocaleTimeString(); // Formato de hora (ej: 14:30:45)

    // Reemplazar placeholders en el template
    const finalContent = templateContent
      .replace(/{{cap_title}}/g, title)
      .replace(/{{date}}/g, date) // Reemplazar {{date}} con la fecha actual
      .replace(/{{time}}/g, time); // Reemplazar {{time}} con la hora actual

    // Crear la nota en la carpeta especificada con el contenido del template
    const newFile = await app.vault.create(filePath, finalContent);

    // Abrir la nota en una nueva pestaña
    const leaf = app.workspace.getLeaf(true); // true para abrir en una nueva pestaña
    await leaf.openFile(newFile);

    return `Nota creada en: ${filePath}`;
  } catch (error) {
    return `Error al crear la nota: ${error.message}`;
  }
};
