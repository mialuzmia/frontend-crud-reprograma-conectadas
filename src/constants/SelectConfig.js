export const customStyles = {
  control: (base, state) => ({
    ...base,
    padding: ".3rem",
    fontSize: "1rem",
    borderRadius: ".5rem",
    border:"2px solid var(--gray-color)",
    boxShadow: state.isFocused ? "var(--gray-color)" : "var(--gray-color)",
    '&:hover': {
       borderColor: "var(--bg-color)"
    }
  }),
  input: base => ({
    ...base,
    width: "100%",
   
  }),
  multiValue: (base, state) => ({
    ...base,
    backgroundColor: "var(--secondary-color)",
    borderRadius: ".25rem",
  }),
  multiValueLabel: (base, state) => ({
    ...base,
    color: "var(--text-color)",
    fontSize: "1rem",
    fontWeight: "bold",
  }),
   multiValueRemove: (base, state) => ({
    ...base,
    color: "var(--text-color)", // Change the color to white
    '&:hover': {
      color: "var(--text-color)", // Change the hover color to white
    },
  }),
};

export const genderOptions = [
    { value: 'SHONEN', label: 'SHONEN' },
    { value: 'SHOUJO', label: 'SHOUJO' },
    { value: 'SEINEN', label: 'SEINEN' },
    { value: 'JOSEI', label: 'JOSEI' },
    { value: 'ECCHI', label: 'ECCHI' },
    { value: 'HAREN', label: 'HAREN' },
    { value: 'ISEKAI', label: 'ISEKAI' },
    { value: 'MECHA', label: 'MECHA' },
    { value: 'SLICE OF LIFE', label: 'SLICE OF LIFE' },
    { value: 'KODOMOMUKE', label: 'KODOMOMUKE' },
    { value: 'IYASHIKEI', label: 'IYASHIKEI' },
    { value: 'YAOI', label: 'YAOI' },
    { value: 'YURI', label: 'YURI' },

]
