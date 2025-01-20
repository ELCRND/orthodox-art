import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LeftFilter from "./leftFilter/LeftFilter";
import CenterFilter from "./centerFilter/CenterFilter";
import RightFilter from "./rightFilter/RightFilter";
import Accordion from "../../../accordion/Accordion";
import Label from "./label/Label";
import Input from "./input/Input";
import { filterItemsList } from "@/app/catalog/data";

import styles from "./filter.module.css";
import { useCurrentSearchParams } from "@/app/hooks/useCurrentSearchParams";

type Props = {
  loadProducts: (
    filters: string,
    start?: number,
    end?: number
  ) => Promise<void>;
  isSticky: boolean;
};

const Filter = ({ isSticky, loadProducts }: Props) => {
  const [isWindowWide, setIsWindowWide] = useState<boolean | null>(true);
  const router = useRouter();
  const searchParams = useCurrentSearchParams();

  const updateFilters = (key: string, value: string) => {
    if (searchParams.has(key)) {
      searchParams.set(key, value);
    } else {
      searchParams.append(key, value);
    }

    const search = searchParams.toString();
    const query = search ? `?${search}` : "";

    router.push(`${window.location.pathname}${query}`);
    loadProducts(search);
  };

  useEffect(() => {
    if (!searchParams.has("available")) {
      searchParams.append("available", "stock");
      const search = searchParams.toString();
      router.push(`${window.location.pathname}?${search}`);
    }
    if (!searchParams.has("category")) {
      searchParams.append("category", "all");
      const search = searchParams.toString();
      router.push(`${window.location.pathname}?${search}`);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setIsWindowWide(window.innerWidth < 767);
    };

    if (typeof window !== "undefined") {
      handleResize();

      window.addEventListener("onload", handleResize);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("onload", handleResize);
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const isChecked = (key: string, value: string) => {
    return searchParams.getAll(key).includes(value);
  };

  return (
    <div className={`${styles.container} ${isSticky && styles.sticky}`}>
      {isWindowWide ? (
        <LeftFilter>
          <Accordion text={"Наличие"}>
            {filterItemsList.available.values.map((item) => (
              <Label key={item.value} text={item.text}>
                <Input
                  isChecked={isChecked}
                  updateFilters={updateFilters}
                  type="radio"
                  name={filterItemsList.available.selectType}
                  selectType={filterItemsList.available.selectType}
                  selectValue={item.value}
                />
              </Label>
            ))}
          </Accordion>
        </LeftFilter>
      ) : (
        <LeftFilter>
          {filterItemsList.available.values.map((item) => (
            <Label key={item.value} text={item.text}>
              <Input
                isChecked={isChecked}
                updateFilters={updateFilters}
                type="radio"
                name={filterItemsList.available.selectType}
                selectType={filterItemsList.available.selectType}
                selectValue={item.value}
              />
            </Label>
          ))}
        </LeftFilter>
      )}

      {isWindowWide ? (
        <CenterFilter>
          <Accordion text={"Категория"}>
            {filterItemsList.category.values.map((item) => (
              <Label key={item.value} text={item.text}>
                <Input
                  isChecked={isChecked}
                  updateFilters={updateFilters}
                  type="radio"
                  name={filterItemsList.category.selectType}
                  selectType={filterItemsList.category.selectType}
                  selectValue={item.value}
                />
              </Label>
            ))}
          </Accordion>
        </CenterFilter>
      ) : (
        <CenterFilter>
          {filterItemsList.category.values.map((item) => (
            <Label key={item.value} text={item.text}>
              <Input
                isChecked={isChecked}
                updateFilters={updateFilters}
                type="radio"
                name={filterItemsList.category.selectType}
                selectType={filterItemsList.category.selectType}
                selectValue={item.value}
              />
            </Label>
          ))}
        </CenterFilter>
      )}

      <RightFilter>
        <Accordion>
          {filterItemsList.material.values.map((item) => (
            <Label key={item.value} text={item.text}>
              <Input
                isChecked={isChecked}
                updateFilters={updateFilters}
                type="checkbox"
                name={item.value}
                selectType={filterItemsList.material.selectType}
                selectValue={item.value}
              />
            </Label>
          ))}
        </Accordion>
      </RightFilter>
    </div>
  );
};

export default Filter;
