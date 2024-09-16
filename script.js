$(document).ready(function() {
    // Quando o formulário for enviado
    $('#taskForm').submit(function(event) {
        event.preventDefault(); // Previne o comportamento padrão de recarregar a página
        
        // Pega o valor do input
        let task = $('#taskInput').val();
        
        // Adiciona a tarefa à lista
        $('#taskList').append(`<li>${task}</li>`);
        
        // Limpa o campo de input
        $('#taskInput').val('');
    });
    
    // Adiciona a linha sobre o texto quando o item for clicado
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
