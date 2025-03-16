import { useEffect, useState } from "react";

export const ImageWithFallback = ({
	fallback = "/placeholder.svg",
	alt,
	src,
	className,
}: {
	fallback?: string;
	alt: string;
	src?: string;
	className?: string;
}) => {
	const [error, setError] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: This is a false positive
	useEffect(() => {
		setError(false);
	}, [src]);

	return (
		<img
			alt={alt}
			onError={() => setError(true)}
			src={error ? `${fallback}?orig=${src}` : src || fallback}
			className={className}
		/>
	);
};
