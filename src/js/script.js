document.getElementById('downloadBtn').addEventListener('click', function() {
    
    const link = document.createElement('a');
    
    
    link.href = 'https://drive.google.com/file/d/1hweAOkZCxi4CCiRafMykWT7GS4XvVoMm/view?usp=sharing'; 
    
    
    link.download = 'Curriculo_Guilherme.pdf';

    
    link.click();
  });

  