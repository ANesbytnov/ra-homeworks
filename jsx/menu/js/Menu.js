function Menu({items, opened=false}) {
	return (
	  	<div className={opened ? "menu menu-open" : "menu"}>
		  <div className="menu-toggle"><span></span></div>
		  	{opened && (
				<nav>
					<ul>
						{items.map((item) => <li><a href={item.href}>{item.title}</a></li>)}
					</ul>
				</nav>
			)}
		</div>
	);
}