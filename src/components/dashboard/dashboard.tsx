import { useState } from "react";
import { Alerts } from "../alerts/alerts";
import "./dashboard.css";
import { RuxTab, RuxTabPanel, RuxTabPanels, RuxTabs } from "@astrouxds/react";
import SearchBar from "@/common/searchBar/search-bar";

export const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedTab, setSelectedTab] = useState(false);

  const handleSelectedTab = (tab: number) => {
    setSelectedTab(tab === 2);
  };

  return (
    <main className={`dashboard-page`}>
      <aside className="Dashboard-page__left-panel">
        <Alerts />
      </aside>
      {/* <nav className="Dashboard-page__tabs-bar">
        <RuxTabs id="dashboard-tabs" small>
          <RuxTab
            onRuxtabselected={() => handleSelectedTab(1)}
            id="contacts-tab"
          >
            Contacts
          </RuxTab>
          <RuxTab
            id="equipment-tab"
            onRuxtabselected={() => handleSelectedTab(2)}
          >
            Equipment
          </RuxTab>
        </RuxTabs>
        <SearchBar
          placeholder="Search..."
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          disabled={selectedTab}
        />
      </nav> */}
      {/* <RuxTabPanels aria-labelledby="dashboard-tabs">
        <RuxTabPanel aria-labelledby="contacts-tab">
          <section className="Dashboard-page__right-top-panel">
            <CurrentContactsTable filteredData={filteredContacts} />
          </section>
          <section className="Dashboard-page__right-bottom-panel">
            <div>ContactsSummaryPanel</div>
            <ContactsSummaryPanel filteredData={filteredContacts} />
          </section>
        </RuxTabPanel>
        <RuxTabPanel aria-labelledby="equipment-tab">
          <section className="Dashboard-page__right-top-panel">
            <div>EquipmentStatusPanel</div>
            <EquipmentStatusPanel />
          </section>
          <section className="Dashboard-page__right-bottom-panel">
            <div>TrendingEquipmentStatusPanel</div>
            <TrendingEquipmentStatusPanel />
          </section>
        </RuxTabPanel>
      </RuxTabPanels> */}
    </main>
  );
};
