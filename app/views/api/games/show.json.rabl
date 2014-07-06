object @game
attributes :id, :starts_at, :week_id, :home_squad_id, :visiting_squad_id, :home_squad_score, :visiting_squad_score
node(:started) { |game| game.started? }
node(:display) { |game| game.display }

