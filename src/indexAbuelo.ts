import * as components from './components/indexPadre';
import Profile, { Attribute } from './components/Profile/Profile';
import { data } from './data/data';

class AppContainer extends HTMLElement {
	profiles: Profile[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		data.forEach((user) => {
			const profileCard = this.ownerDocument.createElement('my-profile') as Profile;
			profileCard.setAttribute(Attribute.name, user.name);
			profileCard.setAttribute(Attribute.uid, String(user.id));
			profileCard.setAttribute(Attribute.image, user.image);
			profileCard.setAttribute(Attribute.age, String(user.age));
			profileCard.setAttribute(Attribute.gender, user.gender);
			profileCard.setAttribute(Attribute.area, user.jobDetails.area);
			profileCard.setAttribute(Attribute.position, user.jobDetails.position);
			profileCard.setAttribute(Attribute.timeInCompany, String(user.jobDetails.timeInCompany));
			profileCard.setAttribute(Attribute.experience, String(user.jobDetails.experience));

			this.profiles.push(profileCard);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <h1>PROFILESS</h1>
            `;

			this.profiles.forEach((profile) => {
				this.shadowRoot?.appendChild(profile);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
