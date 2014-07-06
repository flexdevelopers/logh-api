object @game
attributes :id, :starts_at, :week_id, :home_squad_id, :visiting_squad_id, :home_squad_score, :visiting_squad_score
node(:started) { |game| game.started? }
node(:display) { |game| game.display }
node(:start_display) { |game| game.start_display }
node(:week_type_id) { |game| game.week_type_id }
node(:squad_id) { |game| game.squad_id }
node(:squad_name) { |game| game.squad_name }

