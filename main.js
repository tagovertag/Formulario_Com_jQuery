

$('#adicionar').click(() => {
    const tarefa = $('#texto').focus().val()
    if (tarefa) {
        $('#texto').val('')
        $('<li>')
            .text(tarefa)
            .appendTo('#lista-tarefa')
            .click(() => $(event.target).toggleClass('riscado')) // acrescenta ou remove a classe riscado
            .dblclick(() => $(event.target).remove()) // se der duplo clique, remove
    }
})

$('#texto').focus().keyup(() => {
    if (event.keyCode === 13) $('#adicionar').click()
})









