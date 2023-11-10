export const customStyles = {
  control: (base, state) => ({
    ...base,
    padding: ".3rem",
    fontSize: "1.2rem",
    borderRadius: ".5rem",
    border:"2px solid var(--secondary-color)",
    boxShadow: state.isFocused ? "var(--secondary-color)" : "var(--secondary-color)",
    '&:hover': {
       borderColor: "var(--bg-color)"
    }
  }),
  input: base => ({
    ...base,
    width: "100%",
   
  })
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
