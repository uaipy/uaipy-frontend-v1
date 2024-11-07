type CardHeaderTitleProps = {
  title?: string;
  description?: string;
  icon?: React.ElementType;
};

const CardHeaderTitle = ({
  title,
  description,
  icon: Icon,
}: CardHeaderTitleProps) => {
  return (
    <div className="grow">
      <div className="flex items-center gap-2">
        {Icon && (
          <div className="hidden sm:block">
            <Icon className="h-5 w-5 text-primary-300" aria-hidden="true" />
          </div>
        )}
        {title && (
          <h3 className="text-xl font-bold leading-6 text-gray-900">{title}</h3>
        )}
      </div>
      {description && <p className="text-gray-500">{description}</p>}
    </div>
  );
};

export default CardHeaderTitle;
