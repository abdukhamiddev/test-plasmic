import { ComponentMeta, GlobalContextMeta } from "@plasmicapp/host";
import React, { ReactNode } from "react";
export declare function ensure<T>(x: T | null | undefined): T;
interface GraphCMSCredentialsProviderProps {
    apiUrl: string;
    authToken: string;
}
export declare const GraphCMSCredentialsProviderMeta: GlobalContextMeta<GraphCMSCredentialsProviderProps>;
export declare function GraphCMSCredentialsProvider({ apiUrl, authToken, children, }: React.PropsWithChildren<GraphCMSCredentialsProviderProps>): JSX.Element;
interface GraphCMSFetcherProps {
    children?: ReactNode;
    className?: string;
    noAutoRepeat?: boolean;
    noLayout?: boolean;
    query?: string;
    setControlContextData?: (data: {
        endpoint?: string;
        headers?: HeadersInit;
    }) => void;
}
export declare const GraphCMSFetcherMeta: ComponentMeta<GraphCMSFetcherProps>;
export declare function GraphCMSFetcher({ query, children, className, noLayout, noAutoRepeat, setControlContextData, }: GraphCMSFetcherProps): JSX.Element | null;
interface GraphCMSFieldProps {
    className?: string;
    path?: string;
    setControlContextData?: (data: {
        data: any;
    }) => void;
}
export declare const GraphCMSFieldMeta: ComponentMeta<GraphCMSFieldProps>;
export declare function GraphCMSField({ className, path, setControlContextData, }: GraphCMSFieldProps): JSX.Element;
export {};
