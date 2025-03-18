interface TooltipContentProps {
	url?: string;
	title: string;
	text: string;
}
function TooltipContent(props: TooltipContentProps) {
	const { url, title, text } = props;

	return (
		<div className="flex flex-col gap-2">
			<h2 className="font-bold text-pink-500">{title}</h2>
			<p>{text}</p>
			{url && (
				<a
					className="underline hover:font-bold hover:text-orange-500"
					href={url}
					target="_blank"
				>
					{url}
				</a>
			)}
		</div>
	);
}

export default TooltipContent;
