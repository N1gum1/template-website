
    // Seleciona o botão
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Verifica se o usuário já tem uma preferência salva
    const currentTheme = localStorage.getItem('theme');

    // Aplica o tema escuro se estiver salvo no localStorage
    if (currentTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggleBtn.textContent = 'Modo Claro';
    } else {
        themeToggleBtn.textContent = 'Modo Escuro';
    }

    // Função para alternar o tema
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        
        // Atualiza o texto do botão
        if (document.body.classList.contains('dark')) {
            themeToggleBtn.textContent = 'Modo Claro';
            localStorage.setItem('theme', 'dark'); // Salva preferência
        } else {
            themeToggleBtn.textContent = 'Modo Escuro';
            localStorage.setItem('theme', 'light'); // Salva preferência
        }
    });
