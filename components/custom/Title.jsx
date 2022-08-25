function Title({ title }) {
  return (
    <h2 className="text-center border-b-2 border-neutral-500 mt-5 mb-10 pt-2">
      <span className="bg-neutral-100 text-xl font-bold leading-3 pb-1 px-2">
        {title}
      </span>
    </h2>
  );
}

export default Title;
