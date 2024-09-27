document.getElementById('downloadBtn').addEventListener('click', function() {
    // Criar um link temporário
    const link = document.createElement('a');
    
    // Definir o URL do arquivo PDF do currículo
    link.href = '../Curriculo(2).pdf'; // Substitua pelo caminho correto do seu arquivo PDF
    
    // Definir o nome do arquivo que será baixado
    link.download = 'Curriculo_Guilherme.pdf';

    // Simular o clique no link
    link.click();
  });

  