var columnCounter = -1;
var tableNumber = 0;
var focusInput = document.querySelector('#tableName');
focusInput.focus();

document.querySelector('#tableName').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
    let focusUserName = document.querySelector('#userName');
        focusUserName.focus();
    }
});

document.querySelector('#userName').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
    let focusSurName = document.querySelector('#surName');
        focusSurName.focus();
    }
});

document.querySelector('#surName').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
    let focusUserNumber = document.querySelector('#userNumber');
        focusUserNumber.focus();
    }
});

document.querySelector('#userNumber').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('#createTable').click();
    }
}); // Enter'a basıldığında tablo oluştur butonuna tıklanır.

document.querySelector(`#deleteAllTables`).addEventListener('click', function() {
    let deleteAllTables = document.querySelector('#tablesContainer');
    deleteAllTables.innerHTML = '';
    tableNumber = 0;
    columnCounter = 0;
    console.log('Tüm tablolar silindi.');
});

document.querySelector('#createTable').addEventListener('click', function() {
    let rowCounter = 0;
    let tableName = document.querySelector('#tableName').value;
    let userName = document.querySelector('#userName').value;
    let surName = document.querySelector('#surName').value;
    let userNumber = document.querySelector('#userNumber').value;
    console.log(tableName + ' ' + userName + ' ' + surName + ' ' + userNumber);
        // REGEX KONTROLÜ:
        function regexControl(str) {
            // Düzenli ifade ile sayıları bul
                const regex = /\d+/g;           // \d+ = 1 veya daha fazla sayı bul demek. g = global, yani tüm sayıları bul.  
                const numbers = str.match(regex);
            // Eğer sayı yoksa boş dizi döner, varsa sayıları döner
                return numbers ? numbers : [];
        }
        // REGEX KONTROLÜ BİTİŞ.

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
        //
        tableButUpAdress.appendChild(createTableButUp);
        createTableButUp.className = 'tableButUp';

        if (tableName == '') {
            createTableButUp.innerHTML = `Tablo ${tableNumber}`;
        } else {
            createTableButUp.innerHTML = tableName;
        }
        //  //
        let tableButDownAdress = document.querySelector(`#tableHeader${tableNumber}`);
        let createTableButDown = document.createElement('div');
        // //
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

        // TABLO BUTONLARI İÇİN EVENTLER:

            // EKLE BUTONU İÇİN EVENT:
            createTableButtons.addEventListener('click', function() {
                console.log('Ekle butonuna tıklandı.');

                addControl = regexControl(createTableButtons.id);
                console.log('Ekle ID: ' + addControl);
                //
                tableIDControl = regexControl(createTable.id);
                console.log('Tablo ID: ' + tableIDControl);
                //
                addButtonID = parseInt(addControl);
                tableButtonID = parseInt(tableIDControl);

                if (addButtonID == tableButtonID) {
                    // Satır ID'si için regex kontrolü:
                    console.log('Ekleme işlemi başarılı.');
                    let tableInsideRowAdress = document.querySelector(`#tableInside${addButtonID}`);
                    let createTableInsideRow = document.createElement('div');
                    tableInsideRowAdress.appendChild(createTableInsideRow); 
                    createTableInsideRow.className = 'tableRow';
                    let childCount = tableInsideRowAdress.childElementCount; // Satır sayısını alır.
                    console.log('Satır Sayısı: ' + childCount);
                    createTableInsideRow.id = `tableRow_${addButtonID}_${childCount}`;

                    for (let i = 1; i <= 3; i++) {
                        let createColumn = document.createElement('div');
                        createTableInsideRow.appendChild(createColumn);
                        createColumn.className = 'tableColumn';
                        createColumn.id = `tableInside${addButtonID}_Row${childCount}_Col${i}`;
                        console.log(createColumn.id);
                    };

                    if (userName == '') {
                        document.querySelector(`#tableInside${addButtonID}_Row${childCount}_Col1`).innerHTML = '-';
                    }
                    if (surName == '') {
                        document.querySelector(`#tableInside${addButtonID}_Row${childCount}_Col2`).innerHTML = '-';
                    }
                    if (userNumber == '') {
                        document.querySelector(`#tableInside${addButtonID}_Row${childCount}_Col3`).innerHTML = '-';
                    }

                    let rowEditButtonsAdress = document.querySelector(`#tableRow_${addButtonID}_${childCount}`);
                    let createRowEditButtons = document.createElement('div');
                    rowEditButtonsAdress.appendChild(createRowEditButtons);
                    createRowEditButtons.className = 'tableEdit';
                    createRowEditButtons.id = `tableEdit`;

                    let createRowEditButton = document.createElement('button');
                    createRowEditButtons.appendChild(createRowEditButton);
                    createRowEditButton.className = 'edit';
                    createRowEditButton.id = `rowEdit_${addButtonID}_${childCount}`;
                    createRowEditButton.innerHTML = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 117.74 122.88" style="enable-background:new 0 0 117.74 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M94.62,2c-1.46-1.36-3.14-2.09-5.02-1.99c-1.88,0-3.56,0.73-4.92,2.2L73.59,13.72l31.07,30.03l11.19-11.72 c1.36-1.36,1.88-3.14,1.88-5.02s-0.73-3.66-2.09-4.92L94.62,2L94.62,2L94.62,2z M41.44,109.58c-4.08,1.36-8.26,2.62-12.35,3.98 c-4.08,1.36-8.16,2.72-12.35,4.08c-9.73,3.14-15.07,4.92-16.22,5.23c-1.15,0.31-0.42-4.18,1.99-13.6l7.74-29.61l0.64-0.66 l30.56,30.56L41.44,109.58L41.44,109.58L41.44,109.58z M22.2,67.25l42.99-44.82l31.07,29.92L52.75,97.8L22.2,67.25L22.2,67.25z"/></g></svg>';

                    let createRowDeleteButton = document.createElement('button');
                    createRowEditButtons.appendChild(createRowDeleteButton);
                    createRowDeleteButton.className = 'delete';
                    createRowDeleteButton.id = `rowDelete${childCount}`;
                    createRowDeleteButton.innerHTML = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="109.484px" height="122.88px" viewBox="0 0 109.484 122.88" enable-background="new 0 0 109.484 122.88" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"/></g></svg>';

                    createRowEditButton.addEventListener('click', function() {
                        console.log('Düzenleme butonuna tıklandı.');
                    });

                } else {
                    console.log('Ekle işlemi başarısız.');
                }
            });
            // DÜZENLE BUTONU İÇİN EVENT:
            createTableButtons2.addEventListener('click', function() {
                console.log('Düzenle butonuna tıklandı.');

                editControl = regexControl(createTableButtons2.id);
                tableIDControl = regexControl(createTable.id);

                editButStrToNum1 = parseInt(editControl);
                editButStrToNum2 = parseInt(tableIDControl);

                if (editButStrToNum1 == editButStrToNum2) {
                    console.log('Düzenleme işlemi başarılı.');
                } else {
                    console.log('Düzenleme işlemi başarısız.');
                }
            });
            
            // TABLOYU TEMİZLE BUTONU İÇİN EVENT:
            createTableButtons3.addEventListener('click', function() {
                console.log('Tabloyu Temizle butonuna tıklandı.');

                clearControl = regexControl(createTableButtons3.id);
                tableIDControl = regexControl(createTable.id);

                clearButStrToNum1 = parseInt(clearControl);
                clearButStrToNum2 = parseInt(tableIDControl);

                if (clearButStrToNum1 == clearButStrToNum2) {
                    console.log('Temizleme işlemi başarılı.');
                } else {
                    console.log('Temizleme işlemi başarısız.');
                }
            });
            
            // TABLOYU SİL BUTONU İÇİN EVENT:
            createTableButtons4.addEventListener('click', function() {
                console.log('Tabloyu Sil butonuna tıklandı.');

                deleteControl = regexControl(createTableButtons4.id);
                tableIDControl = regexControl(createTable.id);

                deleteButStrToNum1 = parseInt(deleteControl);
                deleteButStrToNum2 = parseInt(tableIDControl);

                if (deleteButStrToNum1 == deleteButStrToNum2) {
                    console.log('Silme işlemi başarılı.');
                } else {
                    console.log('Silme işlemi başarısız.');
                }
            });
            
        // TABLO BUTONLARI İÇİN EVENTLER BİTİŞ.

    // TABLO HEADER İÇİ OLUŞTURMA KODLARI BİTİŞ.


    // TABLO İÇİ OLUŞTURMA KODLARI:
        let tableInsideAdress = document.querySelector(`#table${tableNumber}`);
        let createTableInside = document.createElement('div');
        tableInsideAdress.appendChild(createTableInside);
        createTableInside.className = 'tableInside';
        createTableInside.id = `tableInside${tableNumber}`;
    // TABLO İÇİ OLUŞTURMA KODLARI BİTİŞ.

    // SATIR OLUŞTURMA KODLARI:
        let tableRowAdress = document.querySelector(`#tableInside${tableNumber}`);
        let createRow = document.createElement('div'); //Tabloya satır oluştur.
        tableRowAdress.appendChild(createRow); //Oluşturulanları HTML'e ekle.
        createRow.className = 'tableRow'; //Oluşturulanlara class ismi ver.
        createRow.id = `tableRow_${tableNumber}_1`; //Kolon ID'sini her defasında 1 artacak şekilde ayarladık. Son id numarasının üstüne 1 eklediği için 1 ile başlattık.
    // SATIR OLUŞTURMA KODLARI BİTİŞ.

    // SÜTUN OLUŞTURMA KODLARI:
        let rowAdress = document.querySelector(`#tableRow_${tableNumber}_1`);
        
        for (let i = 1; i <= 3; i++) {
        let createColumn = document.createElement('div');

        columnIDControl = regexControl(createTableHeader.id);
        columnIDtoInt = parseInt(columnIDControl);

        rowAdress.appendChild(createColumn);
        createColumn.className = `tableColumn`;

        // HÜCRE ADRES ATAMALARI:
        createColumn.id = `tableInside${columnIDtoInt}_Row${rowCounter}_Col${i}`; // TODO: Burada bir hata var! 

        columnArray = [];
        ColumnIDControl = regexControl(createColumn.id);
        columnArray.push(ColumnIDControl);
        columnArray.forEach(function(columnArrayItems) {
        console.log(columnArrayItems);
        return columnArrayItems;
        });
            
        columnArrayItems = columnArray[0];
        console.log(`Sütun ID: ${columnArrayItems}`); // Hücre adreslerini string dizi olarak gösterir.
        insideNumber = parseInt(columnArrayItems[0]); // Table Inside ID - Tablo içi ID
        rowNumber = parseInt(columnArrayItems[1]); // Row ID - Satır ID
        columnNumber = parseInt(columnArrayItems[2]); // Column ID - ID Sütun ID

        // HÜCRE ADRES ATAMALARI BİTİŞ.

        
        // SÜTUN BAŞLIKLARI İÇİN DÖNGÜ:
            if (i == 1) {
                createColumn.innerHTML = userName;
            } else if (i == 2) {
                createColumn.innerHTML = surName;
            }
            else {
                createColumn.innerHTML = userNumber;
            };

            if (userName == '' && createColumn.id == `tableInside${columnIDtoInt}_Row${rowCounter}_Col1`) {
                createColumn.innerHTML = '-';
            } else if (surName == '' && createColumn.id == `tableInside${columnIDtoInt}_Row${rowCounter}_Col2`) {
                createColumn.innerHTML = '-';
            } else if (userNumber == '' && createColumn.id == `tableInside${columnIDtoInt}_Row${rowCounter}_Col3`) {
                createColumn.innerHTML = '-';
            rowCounter++;
            };
        // SÜTUN BAŞLIKLARI İÇİN DÖNGÜ BİTİŞ.
        };
        columnCounter++;
        let tableEdit = document.createElement('div');
        rowAdress.appendChild(tableEdit);
        tableEdit.className = 'tableEdit';
        tableEdit.id = `tableEdit`;

        let tableEditButton = document.createElement('button');
        tableEdit.appendChild(tableEditButton);
        tableEditButton.className = 'edit';
        tableEditButton.id = `rowEdit_${tableNumber}_${columnCounter}`;
        tableEditButton.innerHTML = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 117.74 122.88" style="enable-background:new 0 0 117.74 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M94.62,2c-1.46-1.36-3.14-2.09-5.02-1.99c-1.88,0-3.56,0.73-4.92,2.2L73.59,13.72l31.07,30.03l11.19-11.72 c1.36-1.36,1.88-3.14,1.88-5.02s-0.73-3.66-2.09-4.92L94.62,2L94.62,2L94.62,2z M41.44,109.58c-4.08,1.36-8.26,2.62-12.35,3.98 c-4.08,1.36-8.16,2.72-12.35,4.08c-9.73,3.14-15.07,4.92-16.22,5.23c-1.15,0.31-0.42-4.18,1.99-13.6l7.74-29.61l0.64-0.66 l30.56,30.56L41.44,109.58L41.44,109.58L41.44,109.58z M22.2,67.25l42.99-44.82l31.07,29.92L52.75,97.8L22.2,67.25L22.2,67.25z"/></g></svg>';

        let tableDeleteButton = document.createElement('button');
        tableEdit.appendChild(tableDeleteButton);
        tableDeleteButton.className = 'delete';
        tableDeleteButton.id = `rowDelete${columnCounter}`;
        tableDeleteButton.innerHTML = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="109.484px" height="122.88px" viewBox="0 0 109.484 122.88" enable-background="new 0 0 109.484 122.88" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"/></g></svg>';

        tableEditButton.addEventListener('click', function() { 
        
        /* Bu alan ile ekle butonu bloğu içerisindeki: 

            createRowEditButton.addEventListener('click', function() {
            console.log('Düzenleme butonuna tıklandı.');
        });  

        kısımları aynıdır. Buraya eklenenlerin oraya da eklenmesi gerekmektedir.*/
            console.log('Düzenleme butonuna tıklandı.');
        });


    // SÜTUN OLUŞTURMA KODLARI BİTİŞ.
    tableNumber++;

});