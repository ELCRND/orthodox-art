"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LeftFilter from "./leftFilter/LeftFilter";
import CenterFilter from "./centerFilter/CenterFilter";
import RightFilter from "./rightFilter/RightFilter";
import Accordion from "./accordion/Accordion";
import Label from "./label/Label";
import Input from "./input/Input";
import { filterItemsList } from "@/app/catalog/data";

import styles from "./filter.module.css";

const Filter = () => {
  const [isWindowWide, setIsWindowWide] = useState<boolean | null>(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  const getQuery = () =>
    new URLSearchParams(Array.from(searchParams.entries()));

  const updateFilters = (key: string, value: string) => {
    const current = getQuery();

    if (current.has(key)) {
      current.set(key, value);
    } else {
      current.append(key, value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${window.location.pathname}${query}`);
  };

  useEffect(() => {
    const current = getQuery();
    if (!current.has("available")) {
      current.append("available", "stock");
      const search = current.toString();
      router.push(`${window.location.pathname}?${search}`);
    }
    if (!current.has("category")) {
      current.append("category", "all");
      const search = current.toString();
      router.push(`${window.location.pathname}?${search}`);
    }
  }, []);

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
    <div className={styles.container}>
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

      {isWindowWide ? (
        <CenterFilter>
          <Accordion text={"Категория"}>
            {filterItemsList.category.values.map((item, idx) => (
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
          {filterItemsList.category.values.map((item, idx) => (
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

// const updateFilters = (key: string, value: string) => {
//   const current = getQuery();

//   const values = current.getAll(key);
//   if (values.includes(value)) {
//     current.delete(key);
//     values.filter((v) => v !== value).forEach((v) => current.append(key, v));
//   } else {
//     current.append(key, value);
//   }

//   const search = current.toString();
//   const query = search ? `?${search}` : "";

//   router.push(`${window.location.pathname}${query}`);
// };
