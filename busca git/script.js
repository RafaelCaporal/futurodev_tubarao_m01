function searchProfile() {
  const username = document.getElementById('usernameInput').value;

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Usuário não encontrado');
      }
      return response.json();
    })
    .then((data) => {
      const profileDiv = document.getElementById('profile');
      profileDiv.style.display = 'block';

      const usernameParagraph = document.getElementById('username');
      usernameParagraph.textContent = `Nome de usuário: ${data.login}`;

      const publicReposParagraph = document.getElementById('publicRepos');
      publicReposParagraph.textContent = `Número de repositórios públicos: ${data.public_repos}`;

      const avatarImg = document.getElementById('avatar');
      avatarImg.src = data.avatar_url;
    })
    .catch((error) => {
      alert(error.message);
    });
}
