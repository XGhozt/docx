import { ShadingType } from "../../../file/table";
import { XmlComponent } from "../../../file/xml-components";
import { RunProperties } from "./properties";
import { UnderlineType } from "./underline";
export interface IRunOptions {
    readonly bold?: true;
    readonly italics?: true;
    readonly underline?: {
        readonly color?: string;
        readonly type?: UnderlineType;
    };
    readonly color?: string;
    readonly size?: number;
    readonly rightToLeft?: boolean;
    readonly smallCaps?: boolean;
    readonly allCaps?: boolean;
    readonly strike?: boolean;
    readonly doubleStrike?: boolean;
    readonly subScript?: boolean;
    readonly superScript?: boolean;
    readonly style?: string;
    readonly font?: {
        readonly name: string;
        readonly hint?: string;
    };
    readonly highlight?: string;
    readonly shading?: {
        readonly type: ShadingType;
        readonly fill: string;
        readonly color: string;
    };
}
export declare class Run extends XmlComponent {
    protected readonly properties: RunProperties;
    constructor(options: IRunOptions);
    break(): Run;
    tab(): Run;
    pageNumber(): Run;
    numberOfTotalPages(): Run;
    numberOfTotalPagesSection(): Run;
}
