export const TagsFilterBar = ({
  categories,
  setSelectedCategoryId,
  selectedCategoryId,
}) => {
  return (
    <div
      style={{ animationDelay: "1s" }}
      className={`sticky top-0 z-10 bg-white py-4 flex gap-2 overflow-auto justify-start scrollbar-hidden opacity-0 transform transition-all animate-fade `}
    >
      {categories.length > 0 ? (
        categories.map((category) => (
          <button
            className={` hover:bg-zinc-200 whitespace-nowrap cursor-pointer inline-flex items-center gap-2 no-underline hover:text-black text-xs font-medium leading-[105%] tracking-[-0.00563rem] transition-all duration-[0.2s] ease-in-out pl-3 pr-1 py-1 rounded-[6.1875rem] ${
              selectedCategoryId === category.id
                ? "text-black bg-zinc-200"
                : "text-zinc-600 bg-[#f7f6f6]"
            }`}
            key={category.id}
            onClick={() => setSelectedCategoryId(category.id)}
          >
            {category.tag_name}{" "}
            <span
              className={` px-2 py-1 rounded-full ${
                selectedCategoryId === category.id
                  ? "bg-zinc-100"
                  : "bg-zinc-200"
              }`}
            >
              112
            </span>
          </button>
        ))
      ) : (
        <div className="flex justify-center items-center">
          <div className="animate-spin border-t-2 border-zinc-900 border-solid w-6 h-6 rounded-full"></div>
        </div>
      )}
    </div>
  );
};
