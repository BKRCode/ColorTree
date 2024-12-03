# Colorful Recursive Tree Visualization

This project creates a dynamic and colorful recursive tree visualizer using HTML5 Canvas and JavaScript. The depth and complexity of the tree can be controlled through a slider, providing an interactive experience.

## Features

- **Dynamic Tree Rendering:** The tree is drawn using recursive functions with branches that split and shrink as they grow.
- **Adjustable Complexity:** A slider allows you to control the depth of recursion and the number of branches.
- **Colorful Display:** Each branch is rendered with a unique hue, giving the tree a vibrant and dynamic appearance.
- **Interactive Canvas:** The canvas updates in real-time as you adjust the slider.

## Setup and Usage

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in any modern browser.
3. Adjust the slider to change the complexity of the tree.

## Files in the Project

- **index.html:** Contains the HTML structure and references to the JavaScript and CSS files.
- **script.js:** Contains the JavaScript code for drawing the tree and handling user interactions.
- **style.css:** (Optional) Customize the appearance of the slider or canvas here.
- **readme.md:** This file provides an overview of the project.

## How It Works

1. **Canvas Initialization:** A canvas element is used for rendering graphics.
2. **Recursive Drawing:** The `drawBranch` function is called recursively to draw branches. Each branch is shorter, angled, and colored differently.
3. **Color Coding:** The `hsl` color model is used, with the hue dependent on the recursion depth.
4. **Slider Interaction:** The `complexitySlider` element listens for input changes and redraws the tree in real-time.

## Core Functions

### `drawTree()`

Clears the canvas and initiates the recursive drawing process.

### `drawBranch(x, y, angle, depth, length)`

Draws individual branches of the tree based on the current position, angle, depth, and length.

## Dependencies

No external libraries are required. The project uses native JavaScript and the HTML5 Canvas API.

## Customization

- **Branch Colors:** Adjust the `hsl` formula in `ctx.strokeStyle` for different color schemes.
- **Branch Angles and Lengths:** Modify the angles and scaling factors in the recursive calls to `drawBranch` for unique tree shapes.
- **Slider Range:** Update the `min`, `max`, and `step` attributes of the `complexitySlider` input in the HTML for finer control.

## Update 3/12/2024

- Optimized rendering by encapsulating tree parameters into a `treeParams` object.
- Added dynamic canvas resizing to fit the viewport with `resizeCanvas` functionality.
- Enhanced tree customization with new parameters:
  - `angleVariation` for branch angles.
  - `lineWidthMultiplier` for branch thickness.
- Updated event listeners to dynamically update the tree on complexity slider input and window resizing.
- Improved code readability and maintainability with modular functions.
- Simplified user interface with proportional canvas size and a centered layout.
- Prepared the foundation for future extensions, including color gradients and interactivity.

## License

This project is open-source and available under the MIT License.
