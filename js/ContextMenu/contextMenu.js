/**
 * options:
 * {
 *  menus:[{
 *    name: string,
 *    onClick: Function
 *  }],
 * }
 */
const ContextMenu = function (options) {
    let instance;

    function createMenu() {
        const ul = document.createElement("ul");
        ul.classList.add("custom-context-menu");
        const { menus } = options;
        if (menus && menus.length > 0) {
            for (let menu of menus) {
                const li = document.createElement("li");
                li.textContent = menu.name;
                li.onclick = menu.onClick;
                ul.appendChild(li);
            }
        }
        const body = document.querySelector("body");
        body.appendChild(ul);
        return ul;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createMenu();
            }
            return instance;
        },
    };
};


let contextMenu;

function showMenu(e,options) {
    e.preventDefault();
    const menus = ContextMenu(options).getInstance();
    contextMenu = menus;
    menus.style.top = `${e.clientY}px`;
    menus.style.left = `${e.clientX}px`;
    menus.classList.remove("hidden");
}

function hideMenu(event) {
    if (contextMenu !== undefined){
        contextMenu.classList.add("hidden");
    }
}

document.addEventListener("click", hideMenu);
