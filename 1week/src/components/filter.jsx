import { FilterTypeSelect } from "../consts/filterType";

const FilterPage = ({ searchParams, setSearchParams }) => {
  /*
1. 50개를 클릭했을때 client.js/userListSlice에 실행되고있는 perPage에 값이 50으로 변경해주기
2. searchParams.get으로 perPage 가져와서 .set으로 50으로 바꿔줘보기
3. setSearchParams으로 상태 변경해보기
4. 이름순을 클릭하면 
  */
  const filter = searchParams.get("filter");
  //이름 순 정렬 함수
  const sortByName = (data) => {
    return data.sort((a, b) => a - b);
    // 솔트를 해줄거야
  };

  const onChangeTypeOption = (e) => {
    const value = e.target.value;

    setSearchParams((prev) => {
      prev.set("perPage", value);
      return prev;
    });
  };

  return (
    <>
      {FilterTypeSelect.map((select, idx) => (
        <select
          name={select.optionType}
          key={idx}
          onChange={onChangeTypeOption}
        >
          {select.option.map((option, optionIdx) => (
            <option key={optionIdx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ))}
    </>
  );
};
export default FilterPage;
