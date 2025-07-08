export interface FormFieldDef {
  name: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'dropdown';
  placeholder?: string;
  required?: boolean;
  options?: any[];
  optionLabel?: string;
  optionValue?: string;
}
