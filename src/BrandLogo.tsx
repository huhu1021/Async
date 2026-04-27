/**
 * Async 品牌标：参考新版 A/S 流线结构，收敛为适合小尺寸展示的灰银图标。
 */
export function BrandLogo({
	className,
	size = 22,
	'aria-label': ariaLabel,
}: {
	className?: string;
	size?: number;
	'aria-label'?: string;
}) {
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox="0 0 96 96"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			role={ariaLabel ? 'img' : undefined}
			aria-hidden={ariaLabel ? undefined : true}
			aria-label={ariaLabel}
		>
			<g transform="matrix(1,6.53649401272105e-9,2.4619399852099377e-9,1,-2.7081339837309315e-8,-7.190143413993155e-8)">
				<ellipse cx="48" cy="48" rx="35.17639923095703" ry="35.17639923095703" fill-opacity="0" stroke-opacity="1" stroke="#FFFFFF" fill="none" stroke-width="3.6472015380859375"/>
			</g>
			<g transform="matrix(1,6.53649401272105e-9,2.4619399852099377e-9,1,-7.632014131786491e-8,-1.7648533656711152e-7)">
				<path d="M56.431465,38.182484099999996L56.431465,31L51.568531,31L51.568531,35.9603724L39.382901000000004,46.509969999999996L24.5685325,31.85236406L24.5685325,65L29.4314675,65L29.4314675,43.50478L39.162551,53.132891L56.431465,38.182484099999996Z" fillRule="evenodd" fill="#FFFFFF" fillOpacity="1"/>
			</g>
			<g transform="matrix(1,6.53649401272105e-9,2.4619399852099377e-9,1,-8.862983946755776e-8,-2.679962562979199e-7)">
				<path d="M66.56853699999999,41.2956991L66.56853699999999,65L71.431471,65L71.431471,30.7043009L38.5685327,58.947445L38.5685325,65L43.4314675,65L43.4314675,61.180212L66.56853699999999,41.2956991Z" fillRule="evenodd" fill="#FFFFFF" fillOpacity="1"/>
			</g>
			<path d="M39,31L39,43L44,38.2000008L44,31L39,31Z" fill="#FED500" fillOpacity="1" transform="matrix(1,6.53649401272105e-9,2.4619399852099377e-9,1,-7.632014131786491e-8,-2.549232647197641e-7)"/>
			<path d="M57,65L57,77L62,72.2000008L62,65L57,65Z" fill="#FED500" fillOpacity="1" transform="matrix(-1,-6.53649401272105e-9,-2.4619399852099377e-9,-1,114.0000001600261,130.00000037258016)"/>
		</svg>
	);
}