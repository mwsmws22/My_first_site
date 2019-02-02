export function hitTemplate(hit) {
  return `
    <div class="hit">
      <div class="hit-content">
        <div>
          <h1 class="hit-name">${hit._highlightResult.title.value}</h1>
          <div class="hit-description">${
            hit._snippetResult.instructor.value
          }</div>
        </div>
      </div>
    </div>
  `;
}