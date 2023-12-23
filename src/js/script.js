class RepoWebComponent extends HTMLElement {
  connectedCallback() {
    const category = this.getAttribute('category') || 'all';
    const title = this.getAttribute('title') || 'Judul Default';
    const imageUrl = this.getAttribute('image-url') || 'https://via.placeholder.com/150';
    const link = this.getAttribute('link') || '#';

    this.innerHTML = `
      <article data-kategori="${category}" class="relative group cursor-pointer overflow-hidden rounded-xl shadow-md">
						<img src="${imageUrl}" alt="${title}"
							class="h-full object-cover transition-transform transform group-hover:scale-105">
						<a href="${link}" target="_blank" rel="noopener noreferrer" class="black-hover opacity-0 absolute inset-0 flex flex-col items-center justify-center p-5 text-center transition-opacity duration-300 ease-in-out hover:opacity-100">
            <div
							class="">
							<span class="text-slate-300 text-sm uppercase tracking-[2px]">${category}</span>
							<h2 class="font-semibold text-white text-lg lg:text-2xl text-pretty">${title}</h2>
							<p
								class="text-white mt-3 text-base underline underline-offset-2 tracking-wide hover:text-slate-400">View
								Repo <span aria-hidden="true">→</span></p>
						</div>
            </a>
        </article>
    `;
  }
}

customElements.define('repo-github', RepoWebComponent);
