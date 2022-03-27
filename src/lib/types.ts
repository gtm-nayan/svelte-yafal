export type IconPrefix = 'fas' | 'far' | 'fal' | 'fat' | 'fad' | 'fab' | 'fak';
export type IconPathData = string | string[];

export interface IconLookup {
	prefix: IconPrefix;
	iconName: string;
}

export interface IconDefinition extends IconLookup {
	icon: [
		number, // width
		number, // height
		string[], // ligatures
		string, // unicode
		IconPathData // svgPathData
	];
}

export interface Transform {
	scale?: number;
	x?: number;
	y?: number;
	rotate?: number;
	flipX?: boolean;
	flipY?: boolean;
}

export type Nullish = null | undefined;
