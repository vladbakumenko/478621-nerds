            var open = document.querySelector(".btn-write-us");
            var popup = document.querySelector(".modal-write-us");
            var close = popup.querySelector(".modal-close");
            var login = popup.querySelector("[type=text]");
            var form = popup.querySelector(".write-us");
            var email = popup.querySelector("[type=email]");
            var isStorageSupport = true;
            var storage = "";
  
            try {
                storage = localStorage.getItem("login");
            }   catch (err) {
                isStorageSupport = false;
            }
                    
            open.addEventListener("click", function (evt) {
                evt.preventDefault();
                popup.classList.add("modal-show");

                if (storage) {
                    login.value = storage;
                    email.focus()
                }   else {
                    login.focus();
                }
            });

            close.addEventListener("click", function (evt) {
                evt.preventDefault();
                popup.classList.remove("modal-show");
                popup.classList.remove("modal-error");
            });

            form.addEventListener("submit", function (evt) {
                if (!login.value || !email.value) {
                evt.preventDefault();
                popup.classList.remove("modal-error");
                popup.offsetWidth = popup.offsetWidth;
                popup.classList.add("modal-error");
                } else {
                    if (isStorageSupport) {
                        localStorage.setItem("login", login.value);
                    }
                }
            });

            window.addEventListener("keydown", function (evt) {
                if (evt.keyCode === 27) {
                    evt.preventDefault();
                    if (popup.classList.contains("modal-show")) {
                        popup.classList.remove("modal-show");
                        popup.classList.remove("modal-error");
                    }
                }
            });
