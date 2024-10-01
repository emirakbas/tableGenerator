var rowCounter = 0;
var columnCounter = 0;
var tableNumber = 0;

document.querySelector('#createTable').addEventListener('click', function() {
    let tableName = document.querySelector('#tableName').value;
    let userName = document.querySelector('#userName').value;
    let surName = document.querySelector('#surName').value;
    let userNumber = document.querySelector('#userNumber').value;
    console.log(tableName + ' ' + userName + ' ' + surName + ' ' + userNumber);

    // TABLO OLUŞTURMA KODLARI:
        let tableAdress = document.querySelector('#tablesContainer'); //Oluşturacağımız konum.
        let createTable = document.createElement('div');

        tableAdress.appendChild(createTable);
        createTable.className = 'table';
        createTable.id = `table${tableNumber}`;
    // TABLO OLUŞTURMA KODLARI BİTİŞ.

    // TABLO HEADER OLUŞTURMA KODLARI:
        let tableHeaderAdress = document.querySelector(`#table${tableNumber}`);
        let createTableHeader = document.createElement('div');

        tableHeaderAdress.appendChild(createTableHeader);
        createTableHeader.className = 'tableButtons';
        createTableHeader.id = `tableHeader${tableNumber}`;
    // TABLO HEADER OLUŞTURMA KODLARI BİTİŞ.

    // TABLO HEADER İÇİ KODLARI:
        let tableButUpAdress = document.querySelector(`#tableHeader${tableNumber}`);
        let createTableButUp = document.createElement('div');

        tableButUpAdress.appendChild(createTableButUp);
        createTableButUp.className = 'tableButUp';
        createTableButUp.innerHTML = 'Tablo Adı'; // !!! TABLO ADI BURADA YAZAR !!!

        let tableButDownAdress = document.querySelector(`#tableHeader${tableNumber}`);
        let createTableButDown = document.createElement('div');

        tableButDownAdress.appendChild(createTableButDown);
        createTableButDown.className = 'tableButDown';
        createTableButDown.id = `tableButDown${tableNumber}`;
        // //
        let tableButtonsAdress = document.querySelector(`#tableButDown${tableNumber}`);
        let createTableButtons = document.createElement('button');
        // //
        tableButtonsAdress.appendChild(createTableButtons);
        createTableButtons.className = 'add';
        createTableButtons.id = `add${tableNumber}`;
        createTableButtons.innerHTML = 'Ekle';
        // //
        let createTableButtons2 = document.createElement('button');
        tableButtonsAdress.appendChild(createTableButtons2);
        createTableButtons2.className = 'edit';
        createTableButtons2.id = `edit${tableNumber}`;
        createTableButtons2.innerHTML = 'Düzenle';
        // //
        let createTableButtons3 = document.createElement('button');
        tableButtonsAdress.appendChild(createTableButtons3);
        createTableButtons3.className = 'clear';
        createTableButtons3.id = `clear${tableNumber}`;
        createTableButtons3.innerHTML = 'Tabloyu Temizle';
        // //
        let createTableButtons4 = document.createElement('button');
        tableButtonsAdress.appendChild(createTableButtons4);
        createTableButtons4.className = 'delete';
        createTableButtons4.id = `delete${tableNumber}`;
        createTableButtons4.innerHTML = 'Tabloyu Sil';
    // TABLO HEADER İÇİ OLUŞTURMA KODLARI BİTİŞ.

    // SATIR OLUŞTURMA KODLARI:
        let tableInsideAdress = document.querySelector(`#table${tableNumber}`);
        let createRow = document.createElement('div'); //Tabloya satır oluştur.
        tableInsideAdress.appendChild(createRow); //Oluşturulanları HTML'e ekle.
        createRow.className = 'tableRow'; //Oluşturulanlara class ismi ver.
        createRow.id = `tableRow${rowCounter}`; //Kolon ID'sini her defasında 1 artacak şekilde ayarla.
    // SATIR OLUŞTURMA KODLARI BİTİŞ.

    // SÜTUN OLUŞTURMA KODLARI:
        let rowAdress = document.querySelector(`#tableRow${rowCounter}`);
        
        for (i = 1; i <= 4; i++) {
        let createColumn = document.createElement('div');

        rowAdress.appendChild(createColumn);
        createColumn.className = `tableColumn`;
        createColumn.id = `tableColumn${columnCounter}`;

        // SÜTUN BAŞLIKLARI İÇİN DÖNGÜ:
            if (i == 1) {
                createColumn.innerHTML = 'İsim';
            } else if (i == 2) {
                createColumn.innerHTML = 'Soyisim';
            }
            else if (i == 3) {
                createColumn.innerHTML = 'Numara';
            }
            else if (i == 4) {
                createColumn.innerHTML = 'İşlem';
            };
        // SÜTUN BAŞLIKLARI İÇİN DÖNGÜ BİTİŞ.

        // SÜTUN İÇİNDEKİ İÇERİKLERİ OLUŞTURMA:


        columnCounter++;
        };
    // SÜTUN OLUŞTURMA KODLARI BİTİŞ.

    tableNumber++;
    rowCounter++; //Her tıklamada 1 arttır.
    console.log(`Kolon: ${columnCounter} \nSatır: ${rowCounter}`);

});