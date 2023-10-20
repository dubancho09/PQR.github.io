const dropArea = document.querySelector(".drop-area");
const input_file = document.querySelector("#load-file");
const btn_file = document.querySelector(".btn-file");
const btn_upload = document.querySelector(".btn_upload");
const btn_toast_error = document.querySelector("#btn_toast_error");
let files;

const document_error = document.querySelector('#document-error');
const document_success = document.querySelector('#card-success-1');
const btn_register = document.querySelector('.register');

btn_upload.addEventListener('click' , ()=> {
    btn_register.disabled = false;
    document_error.style.display = 'none';
    document_success.style.display = 'flex';
});

btn_file.addEventListener('click' , () => {
    input_file.click();
});

input_file.addEventListener('change' , (e) => {
    files = input_file.files;
    dropArea.classList.add('active');
    console.log(files);
    showFiles(files);
    dropArea.classList.remove('active');
});

dropArea.addEventListener('dragover' , (e) => {
    e.preventDefault();
    dropArea.classList.add('active');
});

dropArea.addEventListener('dragleave' , (e) => {

    e.preventDefault();
    dropArea.classList.remove('active');

});

dropArea.addEventListener('drop' , (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    console.log(files);
    showFiles(files);
    dropArea.classList.remove('active');
    
});


const showFiles = ( files ) => {
    if( files.length === undefined ){
        processFile(files);
    }else{
        for( const file of files ){
            processFile(files);
        }
    }
}

function processFile(file){
    const docType = file[0].type;
    const validExtensions = [ 'image/jpeg' , 'image/jpg' , 'image/png' , 'application/pdf' ];

    if(validExtensions.includes(docType)){
        
        const fileReader = new FileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`;

        fileReader.addEventListener('loadend' , (e) => {

            const fileUrl = fileReader.result;

            const image = `
                <div id="${id}" class="file-container mt-3 px-3 py-2" style="background: #F8F6F6;">
                    <div class="d-flex justify-content-between align-items-center">
                      <img src='${fileUrl}'  width="50px"/>
                      <span>${file[0].name}</span>
                      <span role="button" class="btn-close"></span>
                    </div>
                    <div class="mt-2">
                        
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                        
                    </div>
                </div>
            `;

            

            const html = document.querySelector('.preview').innerHTML;
            document.querySelector('.preview').innerHTML = image + html;

            btn_upload.disabled = false;
            
        });

        console.log(file);
        fileReader.readAsDataURL(file[0]);
    }else{
        btn_toast_error.click();
    }
}

