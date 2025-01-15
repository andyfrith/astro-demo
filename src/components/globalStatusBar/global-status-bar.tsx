import {
  RuxGlobalStatusBar,
  RuxMonitoringIcon,
  RuxClock,
  RuxIcon,
} from "@astrouxds/react";

export const GlobalStatusBar = () => {
  return (
    <div className="App">
      <RuxGlobalStatusBar
        appDomain="Astro"
        appState="Active"
        appVersion="UXDS Demo"
        username="Buzz Lightyear"
      >
        <RuxIcon slot="left-side" icon="apps"></RuxIcon>
        <RuxClock></RuxClock>
        <RuxMonitoringIcon
          slot="right-side"
          icon="antenna-receive"
          notifications={15}
          status="standby"
          label="Stand By"
        ></RuxMonitoringIcon>
        <RuxMonitoringIcon
          slot="right-side"
          icon="antenna-receive"
          notifications={15}
          status="normal"
          label="Normal"
        ></RuxMonitoringIcon>
        <RuxMonitoringIcon
          slot="right-side"
          icon="antenna-receive"
          notifications={15}
          status="caution"
          label="Caution"
        ></RuxMonitoringIcon>
        <RuxMonitoringIcon
          slot="right-side"
          icon="antenna-receive"
          notifications={15}
          status="serious"
          label="Serious"
        ></RuxMonitoringIcon>
        <RuxMonitoringIcon
          slot="right-side"
          icon="antenna-receive"
          notifications={15}
          status="critical"
          label="Critical"
        ></RuxMonitoringIcon>
      </RuxGlobalStatusBar>
    </div>
  );
};
