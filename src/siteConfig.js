const raw = {
  siteName: "CarterRigert",
  tagline: "Test2",
  aboutText: "Test2",
  primaryColor: "#7b2900",
  service1: { title: "Test2", description: "Test2" },
  service2: { title: "", description: "" },
  service3: { title: "", description: "" },
  contact: {
    email: "test@gmail.com",
    phone: "55555555",
    address: ""
  },
  social: {
    instagram: "",
    facebook: ""
  }
};

const isPlaceholder = (v) => !v || v.startsWith('{{');

const siteConfig = {
  ...raw,
  primaryColor: isPlaceholder(raw.primaryColor) ? '#555555' : raw.primaryColor,
};

export default siteConfig;
