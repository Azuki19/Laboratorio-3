export enum Attribute {
	'uid' = 'uid',
	'name' = 'name',
	'image' = 'image',
	'age' = 'age',
	'gender' = 'gender',
	'area' = 'area',
	'position' = 'position',
	'timeInCompany' = 'timeInCompany',
	'experience' = 'experience',
}

class Profile extends HTMLElement {
	uid?: number;
	name?: string;
	image?: string;
	age?: number;
	gender?: string;
	area?: string;
	position?: string;
	timeInCompany?: number;
	experience?: number;

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			uid: null,
			name: null,
			image: null,
			age: null,
			gender: null,
			area: null,
			position: null,
			timeInCompany: null,
			experience: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute.uid:
				this.uid = newValue ? Number(newValue) : undefined;
				break;

			case Attribute.age:
				this.age = newValue ? Number(newValue) : undefined;
				break;

			case Attribute.timeInCompany:
				this.timeInCompany = newValue ? Number(newValue) : undefined;
				break;

			case Attribute.experience:
				this.experience = newValue ? Number(newValue) : undefined;
				break;

			default:
				this[propName] = newValue;
				break;
		}

		this.render();
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

			<link rel="stylesheet" href="./src/components/Profile/Profile.css" />

          <section>

          <img src="${this.image}"></img>
          <h1>"${this.name}"</h1>
          <p>"Id: ${this.uid}"<p>
          <p>"${this.gender}"<p>
          <p>"Area: ${this.area}"<p>
          <p>"Time in company: ${this.timeInCompany}"<p>
          <p>"Experience: ${this.experience}"<p>
          </section>
          `;
		}
	}
}

customElements.define('my-profile', Profile);
export default Profile;
