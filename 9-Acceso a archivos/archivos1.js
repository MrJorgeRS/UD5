var fileInput = document.getElementById("file-input");
    var fileNamesContainer = document.getElementById("file-names");
    var totalSizeContainer = document.getElementById("total-size");

    fileInput.addEventListener("change", function (e) {
      var files = e.target.files;
      var fileNames = [];
      var totalSize = 0;

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        fileNames.push(file.name);
        totalSize += file.size;
      }

      fileNamesContainer.textContent = "Archivos seleccionados: " + fileNames.join(", ");
      totalSizeContainer.textContent = "Tamaño total: " + formatSize(totalSize);
    });

    function formatSize(size) {
      if (size < 1024) {
        return size + " bytes";
      } else if (size < 1024 * 1024) {
        return (size / 1024).toFixed(2) + " KB";
      } else if (size < 1024 * 1024 * 1024) {
        return (size / (1024 * 1024)).toFixed(2) + " MB";
      } else {
        return (size / (1024 * 1024 * 1024)).toFixed(2) + " GB";
      }
    }