export const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const ageDifferenceMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifferenceMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };