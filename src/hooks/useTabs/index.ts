import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const useTabs = (tabs: string[], queryName = "tab") => {
  const router = useRouter();
  const routerQuery = router?.query[queryName] ?? tabs[0];
  const initialTab = routerQuery ?? tabs[0];

  const [currentTab, setCurrentTab] = useState<string>(initialTab as string);

  const onTab = useCallback(
    (label: string) => {
      setCurrentTab(label);
      const newQueryObject = { ...router.query };
      newQueryObject[queryName] = label.toLowerCase();
      void router.replace(
        {
          pathname: router.pathname,
          query: newQueryObject,
        },
        undefined,
        { shallow: true }
      );
    },
    [queryName, router]
  );

  const refreshTabs = useCallback(() => {
    const newQueryObject = { ...router.query };
    delete newQueryObject[queryName];
    void router.replace(
      {
        pathname: router.pathname,
        query: newQueryObject,
      },
      undefined,
      { shallow: true }
    );
  }, [queryName, router]);

  useEffect(() => {
    if (typeof routerQuery === "string" && routerQuery !== "") {
      setCurrentTab(routerQuery);
    } else if (tabs?.[0]) {
      setCurrentTab(tabs[0]);
    }
  }, [routerQuery, tabs, onTab]);

  return { onTab, refreshTabs, currentTab };
};

export default useTabs;
