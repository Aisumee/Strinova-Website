document.addEventListener('DOMContentLoaded', function() { 

    const roleTitles = document.querySelectorAll('.role-title'); 

    const characters = document.querySelectorAll('.character'); 

 

    // Show all characters by default 

    showCharacters('all'); 

 

    // Add click event listeners to role titles 

    roleTitles.forEach(titles => { 

        titles.addEventListener('click', function() { 

            // Remove active class from all titles 

            roleTitles.forEach(t => t.classList.remove('active')); 

            // Add active class to clicked title 

            this.classList.add('active'); 

            // Get the role from data attribute 

            const role = this.getAttribute('data-role'); 

            // Show characters for selected role 

            showCharacters(role); 

        }); 

    }); 

 

    function showCharacters(role) { 

        characters.forEach(character => { 

            if (role === 'all') { 

                character.style.display = 'block'; 

            } else { 

                // Only show characters that have the exact role class 

                character.style.display = character.classList.contains(role) ? 'block' : 'none'; 

            } 

        }); 

    } 

}); 