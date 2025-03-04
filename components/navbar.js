class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <a href="./index.html" id="logo">ConnortheFan</a>
                <label for="menu" tabindex="0">Menu</label>
                <input id="menu" type="checkbox">
                <ul class="navbar-main">
                    <li><a href="./index.html">Home</a></li>

                    <li class="dropdown">
                        <a href="./projects/index.html" class="dropdown-btn">Projects</a>

                        <ul class="dropdown-content">
                            <li><a href="./projects/sudokusolver.html">Sudoku Solver</a></li>
                            <li><a href="./projects/project2.html">Project 2</a></li>
                        </ul>
                    </li>

                    <li class="dropdown">
                        <a href="./labs/index.html" class="dropdown-btn">Labs</a>
                    
                        <ul class="dropdown-content">
                            <li><a href="./labs/lab1.html">Lab 1</a></li>
                            <li><a href="./labs/lab2.html">Lab 2</a></li>
                        </ul>
                    </li>
                    
                    <li><a href="./aboutme.html">About Me</a></li>

                    <li><a href="./contactme.html">Contact Me</a></li>

                    <li><a href="./tags.html">Tags</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', Navbar);

class Navbar1 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <a href="../index.html" id="logo">ConnortheFan</a>
                <label for="menu" tabindex="0">Menu</label>
                <input id="menu" type="checkbox">
                <ul class="navbar-main">
                    <li><a href="../index.html">Home</a></li>

                    <li class="dropdown">
                        <a href="../projects/index.html" class="dropdown-btn">Projects</a>

                        <ul class="dropdown-content">
                            <li><a href="../projects/sudokusolver.html">Sudoku Solver</a></li>
                            <li><a href="../projects/project2.html">Project 2</a></li>
                        </ul>
                    </li>

                    <li class="dropdown">
                        <a href="../labs/index.html" class="dropdown-btn">Labs</a>
                    
                        <ul class="dropdown-content">
                            <li><a href="../labs/lab1.html">Lab 1</a></li>
                            <li><a href="../labs/lab2.html">Lab 2</a></li>
                        </ul>
                    </li>
                    
                    <li><a href="../aboutme.html">About Me</a></li>

                    <li><a href="../contactme.html">Contact Me</a></li>

                    <li><a href="../tags.html">Tags</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('custom-navbar1', Navbar1);