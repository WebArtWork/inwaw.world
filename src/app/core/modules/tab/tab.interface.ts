export interface Tab {
	name: string;
	icon?: string;
	active?: boolean;
	click: (name: string, index: number) => void;
}
