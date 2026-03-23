export interface Spell {
    index: string;
    name: string;
    level: number;
    school: {
        name: string;
    };
    classes: {
        name: string;
    }[];
    desc: string[];
    range: string;
    components: string[];
    casting_time: string;
    duration: string;
    concentration: boolean;
    ritual: boolean;
}