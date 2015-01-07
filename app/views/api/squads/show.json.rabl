object @squad
attributes :id, :name, :short, :abbrev, :wins, :losses, :ties
node(:record) do |squad|
  squad.record
end
