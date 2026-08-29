// ============================================================
// Centralized, verified Unsplash imagery for the marketing site.
// Every photo id below was checked to resolve (HTTP 200) before
// being added here — build URLs through `unsplash()` so sizing/
// quality params stay consistent everywhere they're used.
// ============================================================

export function unsplash(id: string, width = 1200, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?w=${width}&q=${quality}&auto=format&fit=crop`;
}

export const IMAGES = {
  heroFactory: "1581091226825-a6a2a5aee158", // robotic arm, industrial
  factoryFloor: "1587293852726-70cdb56c2866", // factory floor / robots
  circuitMacro: "1518770660439-4636190af475", // PCB / circuit macro
  roboticArmClose: "1581092160562-40aa08e78837", // robotic arm close-up
  serverRoom: "1553406830-ef2513450d76", // data center / servers
  engineerTablet: "1565043666747-69f6646db940", // engineer with tablet
  factoryInterior: "1487017159836-4e23ece2e4cf", // factory interior wide
  industrialMachinery: "1531297484001-80022131f5a1", // machinery
  warehouseLogistics: "1516110833967-0b5716ca1387", // warehouse / AMR
  controlRoom: "1441716844725-09cedc13a4e7", // dashboards / control room
  assemblyLine: "1590959651373-a3db0f38a961", // assembly line
  factoryIndustrial: "1519389950473-47ba0277781c", // factory / industrial
  automationTech: "1600880292203-757bb62b4baf", // automation tech
  roboticArmAlt: "1611095973763-414019e72400", // robot arm
  manufacturingPlant: "1573164713988-8665fc963095", // manufacturing plant
  dataViz: "1563770660941-20978e870e26", // tech / data viz
  factoryAlt: "1620712943543-bcc4688e7485", // factory
  industrialAlt: "1518186285589-2f7649de83e0", // industrial
  factoryMachinery: "1522071820081-009f0129c71c", // factory machinery
  warehouseAlt: "1560179707-f14e90ef3623", // warehouse
  techAbstract: "1542744173-05336fcc7ad4", // tech abstract
  industrialAlt2: "1567789884554-0b844b597180", // industrial
  factoryAlt2: "1526374965328-7f61d4dc18c5", // factory
  techAbstract2: "1576091160399-112ba8d25d1d", // tech abstract
} as const;
