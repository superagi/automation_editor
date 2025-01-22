export interface CustomInputType {
    format?: string;
    value?: string;
    placeholder?: string;
    errorMessage?: string;
    isError?: boolean;
    cssClass?: string;
    disabled?: boolean;
    type?: "primary" | string; // Default is "primary", but it can accept other strings.
    icon?: string;
    size?: string;
    iconCSS?: string;
    alt?: string;
    endIcon?: string;
    endIconSize?: string;
    endIconBackCSS?: string;
    endIconClick?: () => void;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    addAfterOn?: string;
  }
  