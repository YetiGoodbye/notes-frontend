const createExportableConstants = (names) => {
  return names.reduce(
    (constants, name) => (constants[name] = name, constants),
    {}
  )
};

export default createExportableConstants;

//createExportableConstants(['CONSTANT_NAME_1', 'CONSTANT_NAME_2'])
